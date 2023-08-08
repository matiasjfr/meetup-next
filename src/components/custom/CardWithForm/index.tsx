'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { EStatus, Prisma, ProductCategory } from '@prisma/client';
import { useForm } from 'react-hook-form';

import { ProductSchemaCreate, ProductSchemaCreateInput } from '@/lib/schemas/product.schema';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Props {
  productCategories: ProductCategory[];
}

export function CardWithForm({ productCategories }: Props) {
  const [errorPost, setErrorPost] = React.useState('');

  const router = useRouter();

  const form = useForm<ProductSchemaCreateInput>({
    resolver: zodResolver(ProductSchemaCreate),
    defaultValues: {
      name: '',
      description: '',
      buyPrice: '0',
      sellPrice: '0',
    },
  });

  const onSubmit = async (data: ProductSchemaCreateInput) => {
    setErrorPost('');
    console.log(data);
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/v1/products`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const dataResponse = await res.json();
    if (!res.ok) {
      if (dataResponse.errors) {
        setErrorPost(JSON.stringify(dataResponse.errors));
      } else {
        setErrorPost(JSON.stringify(dataResponse.message));
      }
      return;
    }
    console.log(dataResponse);
    form.reset();
    router.refresh();
  };

  return (
    <Card className="w-[1000px] mb-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle>Create product</CardTitle>
            <CardDescription>Try me!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex gap-5">
                <div className="flex flex-1 flex-col space-y-1.5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Product name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-1.5">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input placeholder="Product description" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-1.5">
                  <FormField
                    control={form.control}
                    name="buyPrice"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Buy price</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Buy price"
                            {...field}
                            onChange={(event) =>
                              field.onChange(event.target.value === '' ? undefined : event.target.value)
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex flex-1 flex-col space-y-1.5">
                  <FormField
                    control={form.control}
                    name="sellPrice"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sell price</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Sell price"
                            {...field}
                            onChange={(event) =>
                              field.onChange(event.target.value === '' ? undefined : event.target.value)
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-1.5">
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={EStatus.ACTIVE}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {(Object.keys(EStatus) as Array<keyof typeof EStatus>).map((status, index) => {
                              return (
                                <SelectItem key={index} value={status}>
                                  {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-1.5">
                  <FormField
                    control={form.control}
                    name="idCategory"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={"1"}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {productCategories.map((category, index) => {
                              return (
                                <SelectItem key={index} value={category.id.toString()}>
                                  {category.name}
                                </SelectItem>
                              );
                            })}
                            <SelectItem key={4} value={'5'}>
                              Fake Category
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-sm font-medium text-destructive">{errorPost && `Error: ${errorPost}`} </div>
            <div className="flex justify-end gap-3">
              <Button type="reset" aria-controls="button-cancel" variant="outline">
                Cancel
              </Button>
              <Button type="submit" aria-controls="button-save">
                Save
              </Button>
            </div>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
