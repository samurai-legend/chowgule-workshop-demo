type Params = {
  params: {
    slug: string;
  };
};

export default function RootRoute({ params }: Params) {
  return <div>Blog Page with id {params.slug}</div>;
}
