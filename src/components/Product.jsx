import React from "react";

const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  const Text = () => <div />;
  const Image = () => <div />;
  const Box = () => <div />;
  const Stack = () => <div />;
  const Heading = () => <div />;
  const Tag = () => <div />;
  const TagLabel = () => <div />;
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" />
      <Text data-cy="product-category">Categoty</Text>
      <Tag>
        <TagLabel data-cy="product-gender">Gender</TagLabel>
      </Tag>
      <Heading data-cy="product-title">Title</Heading>
      <Box data-cy="product-price">Price</Box>
    </Stack>
  );
};

export default Product;
