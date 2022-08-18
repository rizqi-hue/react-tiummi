import React, { FC, useEffect, useId, useRef } from "react";
import Glide from "@glidejs/glide";
import { CardCategory } from "../../molecules";
import { Heading } from "../../atoms";

export interface dataTypesCategory {
  title: string;
  content: string;
  id: string;
}

export interface SectionSliderCategoriesProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  subHeading?: string;
  data?: dataTypesCategory[];
}

const ntfsCatNames = [
  "Arts",
  "Entertainment",
  "Music",
  "News",
  "Science",
  "Sports",
  "Technology",
];

const Categories: FC<SectionSliderCategoriesProps> = ({
  heading = "Kategori",
  subHeading = "Explore categories.",
  className = "",
  itemClassName = "",
  data = [
    {
      title: "title",
      content: "content",
      id: "title",
    },
  ],
}) => {
  const sliderRef = useRef(null);
  const id = useId();
  const UNIQUE_CLASS = "glidejs" + id.replace(/:/g, "_");

  useEffect(() => {
    if (!sliderRef.current) {
      return;
    }

    const OPTIONS: Glide.Options = {
      perView: 6,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          perView: 4,
        },
        1024: {
          gap: 20,
          perView: 3.4,
        },
        768: {
          gap: 20,
          perView: 3,
        },
        640: {
          gap: 20,
          perView: 2.3,
        },
        500: {
          gap: 20,
          perView: 1.4,
        },
      },
    };

    let slider = new Glide(`.${UNIQUE_CLASS}`, OPTIONS);
    slider.mount();
    // @ts-ignore
    return () => slider.destroy();
  }, [sliderRef, UNIQUE_CLASS]);

  return (
    <div className={`nc-SectionSliderCategories ${className}`}>
      <div className={`${UNIQUE_CLASS} flow-root`} ref={sliderRef}>
        <Heading desc={subHeading} hasNextPrev>
          {heading}
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {data.map((item, index) => (
              <li key={index} className={`glide__slide ${itemClassName}`}>
                <CardCategory
                  featuredImage={`https://www.static-src.com/siva/asset///11_2020/digital-aggr.png`}
                  title={item.title}
                  content={item.content}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;
