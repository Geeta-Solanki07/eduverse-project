export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/academics/classes`);
  const classes = await res.json();

  return classes.map((cls: any) => ({ slug: cls.slug }));
}
