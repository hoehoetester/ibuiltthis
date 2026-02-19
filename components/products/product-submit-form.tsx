'use client';

import { Loader2Icon, SparklesIcon } from 'lucide-react';
import { FormField } from '../forms/form-field';
import { Button } from '../ui/button';
import { addProductAction } from '@/lib/products/product-actions';
import { useActionState } from 'react';
import { FormState } from '@/types';
import { cn } from '@/lib/utils';

const initialState: FormState = {
  success: false,
  errors: undefined,
  message: '',
};

export default function ProductSubmitForm() {
  const [state, formAction, isPending] = useActionState(
    addProductAction,
    initialState,
  );

  // console.log(state);
  const { errors, message, success } = state;

  const getFieldErrors = (fieldName: string): string[] => {
    if (!errors) return [];
    return (errors as Record<string, string[]>)[fieldName] ?? [];
  };

  return (
    <form className="space-y-6" action={formAction}>
      {message && (
        <div
          className={cn(
            'p-4 rounded-lg border',
            success
              ? 'bg-primary/10 border-primary text-primary'
              : 'bg-destructive/10 border-destructive text-destructive',
          )}
          role="alert"
          aria-live="polite"
        >
          {message}
        </div>
      )}
      {/* Product Name */}
      <FormField
        label="Product Name"
        name="name"
        id="name"
        placeholder="My Awesome Product"
        required
        onChange={() => {}}
        helperText="Max 500 characters"
        error={getFieldErrors('name')}
      />

      {/* Slug */}
      <FormField
        label="Slug"
        name="slug"
        id="slug"
        placeholder="my-awesome-product"
        required
        onChange={() => {}}
        helperText="Unique identifier for your product URL. Max 100 characters."
        error={getFieldErrors('slug')}
      />

      {/* Description */}
      <FormField
        label="Description"
        name="description"
        id="description"
        placeholder="Tell us more about your product..."
        required
        onChange={() => {}}
        textarea
        error={getFieldErrors('description')}
      />

      {/* Tagline */}
      <FormField
        label="Tagline"
        name="tagline"
        id="tagline"
        placeholder="A brief, catchy description"
        required
        onChange={() => {}}
        helperText="Unique identifier for your product URL. Max 100 characters."
        error={getFieldErrors('tagline')}
      />

      {/* Website URL */}
      <FormField
        label="Website URL"
        name="websiteUrl"
        id="websiteUrl"
        placeholder="https://myawesomeproduct.com"
        required
        onChange={() => {}}
        error={getFieldErrors('websiteUrl')}
      />

      {/* Tags */}
      <FormField
        label="Tags"
        name="tags"
        id="tags"
        placeholder="e.g. productivity, AI, design"
        onChange={() => {}}
        helperText="Comma-separated tags to categorize your product."
        error={getFieldErrors('tags')}
      />

      <Button type="submit" size={'lg'} className="w-full">
        {isPending ? (
          <Loader2Icon className="size-4 animate-spin" />
        ) : (
          <>
            <SparklesIcon className="mr-2" />
            Submit Product
          </>
        )}
      </Button>
    </form>
  );
}
