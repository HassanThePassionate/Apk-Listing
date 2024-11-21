import React from "react";
import style from "./card.module.css";
import Image from "next/image";
import StarIcon from "@/components/StarIcon";
import { cn } from "@/lib/utils";
interface Props {
  ele: {
    title: string;
    des?: string;
    img: string;
  };
  postCard?: boolean;
  children?: React.ReactNode;
  className?: string;
}
const Card = ({ ele, postCard, children, className }: Props) => {
  const { img, title, des } = ele;
  return (
    <div className={cn("w-[600px] max-[940px]:w-full", style.card, className)}>
      <div className='img_text'>
        <div className={style.img}>
          <Image src={img} width={120} height={120} alt='img' />
        </div>
        <p className={style.img_text}>Updated : 04/22/2024</p>
      </div>

      <div className='flex max-[940px]:flex-col  max-[940px]:gap-0 gap-[30px]'>
        <div className={style.card_content}>
          <div className={style.title}>{title}</div>
          {postCard ? (
            children
          ) : (
            <>
              <div className='rating'>
                {[0, 1, 2, 3, 4].map((index) => (
                  <StarIcon key={index} />
                ))}
                <strong>3.5</strong>
                <span>( 115139 ratings )</span>
              </div>
              <p className='para'>{des}</p>
              <div className={style.icons}>
                {[0, 1].map((i) => (
                  <svg
                    key={i}
                    width='17'
                    height='17'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                  >
                    <path
                      fill='#3F547E'
                      d='M6 8l.001 9.444c0 .861.696 1.556 1.557 1.556h.442v3.542c0 .804.707 1.458 1.51 1.458.806 0 1.49-.654 1.49-1.459v-3.541h2v3.542c0 .804.707 1.458 1.511 1.458.806 0 1.489-.654 1.489-1.459v-3.541l.444-.001c.858 0 1.556-.696 1.556-1.557v-9.442h-12zm16 1.471c0-.805-.695-1.471-1.5-1.471-.805-.001-1.5.667-1.5 1.472v6.106c0 .806.694 1.422 1.5 1.422.805 0 1.5-.615 1.5-1.422v-6.107zm-17 0c0-.805-.695-1.471-1.5-1.471-.805-.001-1.5.667-1.5 1.472v6.106c0 .806.694 1.422 1.5 1.422.805 0 1.5-.615 1.5-1.422v-6.107zm9.951-7.312l.94-1.859c.068-.132-.019-.3-.163-.3-.066 0-.13.038-.164.105l-.949 1.878c-1.531-.737-3.544-.812-5.229 0l-.95-1.878c-.033-.067-.097-.105-.164-.105-.144 0-.231.168-.163.3l.94 1.859c-1.845 1.034-3.049 2.584-3.049 4.84h12c0-2.256-1.204-3.806-3.049-4.84zm-5.45 2.841c-.276 0-.501-.224-.501-.5 0-.274.225-.5.501-.5s.499.226.499.5c0 .276-.223.5-.499.5zm4.998 0c-.276 0-.499-.224-.499-.5 0-.274.223-.5.499-.5s.501.226.501.5c0 .276-.225.5-.501.5z'
                    ></path>
                  </svg>
                ))}
              </div>
            </>
          )}
        </div>
        {!postCard && (
          <div className={cn("max-[940px]:!mt-0 ", style.btn)}>
            <button>Download</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
