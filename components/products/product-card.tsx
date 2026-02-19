'use client';

import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Badge } from '../ui/badge';
import { StarIcon } from 'lucide-react';
import VotingButtons from './voting-buttons';
import { ProductType } from '@/types';

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <Card className="group card-hover hover:bg-primary-foreground/10 border-solid border-grey-400">
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                {product.voteCount > 100 && (
                  <Badge className="gap-1 bg-primary text-primary-foreground">
                    <StarIcon className="size-3 fill-current" />
                    Featured
                  </Badge>
                )}
              </div>
              <CardDescription>{product.description}</CardDescription>
            </div>

            {/** Voting buttons */}
            <VotingButtons
              hasVoted={false}
              productId={product.id}
              voteCount={product.voteCount}
            />
          </div>
        </CardHeader>

        <CardFooter>
          <div className="flex items-center gap-2">
            {product.tags?.map((tag) => (
              <Badge key={tag} variant={'secondary'}>
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
  // return <
}
