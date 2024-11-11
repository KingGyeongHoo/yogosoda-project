import type { Metadata } from 'next';
import '@devShared/styles/index.css';
import { ReactNode } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
    cafe24Ssurround,
    neoBold,
    neoExtraBold,
    neoHeavy,
    neoLight,
    neoRegular,
} from '@dev/shared/constants/fonts';
import RedirectOnResize from '@dev/shared/components/RedirectOnResize';

export const metadata: Metadata = {
    title: {
        template: '%s | KT', // %s는 동적으로 변경될 제목 부분
        default: '요고 다이렉트 | 요금제 | KT', // 기본 제목
    },
    description:
        'KT 공식 온라인몰 요고 다이렉트 요금제의 브랜드 스토리를 소개합니다. KT 다이렉트 요금제 요고를 다른 요금제와 비교하고 선택하세요. 34세 이하라면 누구나 5G 데이터 최대 3배! 출시 기념 역대급 프로모션 혜택을 드립니다.',
};

export default function RootLayout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" data-locator-target="webstorm">
            <body
                className={`${neoLight.variable} ${neoRegular.variable} ${neoBold.variable} ${neoExtraBold.variable} ${neoHeavy.variable} ${cafe24Ssurround.variable}`}
            >
                <RedirectOnResize />
                {children}
            </body>
        </html>
    );
}
