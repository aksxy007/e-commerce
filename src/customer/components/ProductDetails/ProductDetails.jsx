import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid, LinearProgress } from "@mui/material";
import ProoductReviewCard from "./ProoductReviewCard";
import { mens_kurtas } from "../../../Data/mens_kurtas";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ProductCard from "../Product/ProductCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductById } from "../../../State/Product/ActionType";
import { addItemToCart } from "../../../State/Cart/Action";


const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  
  const navigate =useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const {products} = useSelector(store=>store)

  const product = {
    name: "Basic Tee 6-Pack",
    price: "$192",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Men", href: "#" },
      { id: 2, name: "Clothing", href: "#" },
    ],
    images: [
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: products.product?.color, class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: products.product?.sizes[0].name, inStock: (products.product?.sizes[0].quantity>0)?true:false },
      { name: products.product?.sizes[1].name, inStock: (products.product?.sizes[1].quantity>0)?true:false },
      { name: products.product?.sizes[2].name, inStock: (products.product?.sizes[2].quantity>0)?true:false },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  };

  const [selectedColor, setSelectedColor] = useState(products.product?.color);
  const [selectedSize, setSelectedSize] = useState(products.product?.sizes[0].name);
  console.log("--->",params)
  console.log(selectedSize)
  const handleAddToCart=()=>{
    const data = {productId:params.productId,size:selectedSize.name}
    dispatch(addItemToCart(data))
    navigate('/cart')
  }

  useEffect(()=>{
    dispatch(findProductById(params.productId))
  },[params.productId])

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={products.product && products.product?.imageUrl}
                alt={products.product && products.product?.title}
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((item) => (
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4 ">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div> */}
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">
                {products.product?.brand.toUpperCase()}
              </h1>
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900 opacity-60 pt-1">
                {products.product?.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-semibold">₹ {products.product?.discountedPrice}</p>
                <p className="opacity-50 line-through">₹ {products.product?.price}</p>
                <p className="text-green-500 font-semibold">{products.product?.discountPercent}% off</p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  <Rating name="read-only" value={2} readOnly />
                  <p className="opacity-50 text-sm">{products.product?.numRatings} Ratings</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600">
                    {products.product?.reviews.length} Reviews
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Colors */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>

                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedClass,
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4 w-[50%]"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              "cursor-pointer bg-white text-gray-900 shadow-sm",
                              active ? "ring-2 ring-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-3"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-lg"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  onClick={handleAddToCart}
                  variant="contained"
                  sx={{
                    px: "2rem",
                    py: "1rem",
                    bgcolor: "#9155fd",
                    mt: "2rem",
                  }}
                >
                  Add To Cart
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {products.product?.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rating and Reviews  */}
        <section>
          <h1 className="font-semibold text-lg pb-4">
            Recent Reviews & Ratings
          </h1>
          <div className="border p-5">
            <Grid container spacing={7}>
              <Grid item xs={7}>
                <div className="space-y-5">
                  {[1, 1, 1, 1].map((item) => (
                    <ProoductReviewCard />
                  ))}
                </div>
              </Grid>

              <Grid item xs={5}>
                <h1 className="text-xl font-semibold pb-1">Product Ratings</h1>
                <div className="flex items-center space-x-3">
                  <Rating readOnly value={4.6} precision={0.5} />
                  <p className="opacity-90">59890 Ratings</p>
                </div>
                <Box className="mt-7 space-y-5">
                    <Grid container alignItems="center" gap={2}>
                        <Grid item xs={2}>
                            <p>Excellent</p>
                        </Grid>
                        <Grid item xs={7}>
                            <LinearProgress variant="determinate" value={40} color="success" sx={{bgcolor:"#d0d0d0", borderRadius:4, height:7}}/>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" gap={2}>
                        <Grid item xs={2}>
                            <p>Very Good</p>
                        </Grid>
                        <Grid item xs={7}>
                            <LinearProgress variant="determinate" value={30} color="success" sx={{bgcolor:"#d0d0d0", borderRadius:4, height:7}}/>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" gap={2}>
                        <Grid item xs={2}>
                            <p>Good</p>
                        </Grid>
                        <Grid item xs={7}>
                            <LinearProgress variant="determinate" value={40} color="info" sx={{bgcolor:"#d0d0d0", borderRadius:4, height:7}}/>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" gap={2}>
                        <Grid item xs={2}>
                            <p>Average</p>
                        </Grid>
                        <Grid item xs={7}>
                            <LinearProgress variant="determinate" value={40} color="warning" sx={{bgcolor:"#d0d0d0", borderRadius:4, height:7}}/>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" gap={2}>
                        <Grid item xs={2}>
                            <p>Poor</p>
                        </Grid>
                        <Grid item xs={7}>
                            <LinearProgress variant="determinate" value={10} color="error" sx={{bgcolor:"#d0d0d0", borderRadius:4, height:7}}/>
                        </Grid>
                    </Grid>
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>

        {/* similar product  */}
        <section className="pt-10">
            <h1 className="font-bold text-xl py-5" >Similar Products</h1>
            <div className="flex flex-wrap space-y-5">
                {products.products && products.products?.content?.map((item)=> <ProductCard product={item}/>)}
            </div>
        </section>

      </div>
    </div>
  );
}
