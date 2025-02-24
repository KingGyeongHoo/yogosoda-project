import Image from 'next/image';
import buttonArrow from '@dev/shared/images/directImage/button_arrow.png';
import Link from 'next/link';
import { BenefitsBottomProps } from '@dev/shared/types/direct.type';
import DirectBenefitsBox from './directBenefitsBox';

export default function DirectBenefitsBottom({
    width = '140px',
    height = '140px',
    imageHeight = 100,
    imageWidth = 100,
    left = '10px',
    top = '-30px',
    className = '',
    imageSrc,
    imageAlt = '',
    text,
}: BenefitsBottomProps) {
    return (
        <div className="flex flex-wrap justify-center items-center gap-4 mb-[40px]">
            <DirectBenefitsBox
                width={width}
                height={height}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                left={left}
                top={top}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                text={text}
                className={className}
            >
                <Link href="https://shop.kt.com/display/olhsPlan.do?plnDispNo=2389">
                    <div className="flex justify-between mx-auto mb-[15px] items-center w-[65px] border-b border-black">
                        <p className="text-[0.7rem]">자세히 보기</p>
                        {imageSrc && (
                            <Image
                                src={buttonArrow}
                                alt="Button Arrow"
                                width={15}
                                height={10}
                                className="w-[10px] h-[7px]"
                            />
                        )}
                    </div>
                </Link>
            </DirectBenefitsBox>
        </div>
    );
}
