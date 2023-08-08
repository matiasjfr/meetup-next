import { Prisma, Product } from '@prisma/client';

import { truncateString } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Props {
  products: Prisma.ProductGetPayload<{ include: { category: true } }>[] | [];
}

export function TableDemo({ products }: Props) {
  return (
    <Table>
      <TableCaption>A list of your products</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Image</TableHead>
          <TableHead className="w-[20px]">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-center">Buy Price</TableHead>
          <TableHead className="text-center">Sell Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((prod) => (
          <TableRow key={prod.id}>
            <TableCell>
              {
                // eslint-disable-next-line @next/next/no-img-element
              }<img
                src={!!prod.image ? prod.image : ''}
                alt={prod.name}
                width={50}
                height={50}
                className="rounded-full"
              />
            </TableCell>
            <TableCell className="font-medium">{prod.id}</TableCell>
            <TableCell>{prod.name}</TableCell>
            <TableCell>{prod.status}</TableCell>
            <TableCell>{truncateString(prod.description, 50)}</TableCell>
            <TableCell>{prod.category.name}</TableCell>
            <TableCell className="text-center">{Number(prod.buyPrice)}</TableCell>
            <TableCell className="text-center">{Number(prod.sellPrice)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
