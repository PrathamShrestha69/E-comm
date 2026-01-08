import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router";
import { shoe as shoeData } from "../data/Shoe";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

const ShoeDetailPage = () => {
  const { id } = useParams();
  const item = shoeData.find((s) => String(s.id) === String(id));
  const dispatch = useDispatch();
  const images = useMemo(
    () => [item?.image?.side, item?.image?.back].filter(Boolean),
    [item]
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  if (!item) {
    return (
      <div className="min-h-screen bg-white px-6 py-16 font-[DM_Sans]  ">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-3xl font-bold text-gray-900">Shoe not found</h1>
          <p className="mt-3 text-gray-600">
            We could not locate this product.
          </p>
          <Link
            to="/shop"
            className="mt-6 inline-block rounded-full bg-black px-6 py-3 text-white"
          >
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12 font-[DM_Sans] lg:px-16 mt-15">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row">
        <div className="flex-1 rounded-3xl bg-[#F5F5F5] p-6">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white">
            {images.length > 0 && (
              <img
                src={images[activeIndex]}
                alt={item.name}
                className="absolute left-1/2 top-1/2 h-auto w-11/12 -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            )}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black"
                  aria-label="Previous image"
                >
                  ◀
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black"
                  aria-label="Next image"
                >
                  ▶
                </button>
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2.5 w-2.5 rounded-full ${
                        activeIndex === idx ? "bg-black" : "bg-gray-300"
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="mt-4 flex gap-3">
            <div className="flex-1 rounded-xl bg-white p-3 text-center shadow-sm">
              <p className="text-xs uppercase text-gray-500">Color</p>
              <p className="text-sm font-semibold text-gray-900">
                {item.color}
              </p>
            </div>
            <div className="flex-1 rounded-xl bg-white p-3 text-center shadow-sm">
              <p className="text-xs uppercase text-gray-500">Tag</p>
              <p className="text-sm font-semibold text-gray-900">{item.tag}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-xs uppercase text-white">
              {item.tag}
            </div>
            <h1 className="mt-3 text-4xl font-bold text-gray-900">
              {item.name}
            </h1>
            <p className="mt-2 text-lg font-semibold text-gray-800">
              €{item.price}
            </p>
            {item.discountedPrice && (
              <p className="text-sm text-green-600">
                Now €{item.discountedPrice}
              </p>
            )}
          </div>

          <p className="text-gray-700">{item.desc}</p>

          <div>
            <p className="text-sm font-semibold text-gray-900">
              Available sizes
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {(item.size || []).map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`rounded-xl border px-4 py-2 text-sm font-medium transition ${
                    selectedSize === s
                      ? "border-black bg-black text-white"
                      : "border-gray-200 text-gray-900 hover:border-gray-500"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => {
                if (selectedSize) {
                  dispatch(
                    addToCart({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      image: item.image,
                      size: selectedSize,
                    })
                  );
                  toast.success(`${item.name} added to cart!`, {
                    position: "bottom-right",
                    autoClose: 2000,
                  });
                } else {
                  toast.error("Please select a size", {
                    position: "bottom-right",
                    autoClose: 2000,
                  });
                }
              }}
              className="rounded-full bg-black px-6 py-3 text-white hover:bg-gray-900"
            >
              Add to bag
            </button>
            <Link
              to="/shop"
              className="rounded-full border border-gray-300 px-6 py-3 text-gray-900 hover:border-gray-500"
            >
              Back to shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetailPage;
