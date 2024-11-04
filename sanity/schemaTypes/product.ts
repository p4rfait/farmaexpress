export default {
  name: 'product',
  type: 'document',
  title: 'Producto',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre de producto'
    },
    {
      name: 'images',
      type: 'array',
      title: 'Imagenes del producto',
      of: [{ type: 'image' }],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Descripcion del producto',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Url del producto',
      options: {
        source: 'name',
      }
    },
    {
      name: 'price',
      type: 'number',
      title: 'Precio',
    },
    {
      name: 'category',
      title: 'Categorias del productor',
      type: 'reference',
      to: [
        {
          type: 'category',
        }
      ]
    }
  ],
}
