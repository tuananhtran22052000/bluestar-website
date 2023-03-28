import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Nền tảng chiến lược đầu tư toàn diện | BlueStar Investment</title>
        <meta name="description" content="Đầu tư thông minh cùng BlueStar. BlueStar sử dụng phương pháp kết hợp giữa đánh giá của đội ngũ và hệ thống đánh giá định lượng thành 6 tiêu chí lớn quan trọng và cần thiết để dự báo tiềm năng và cơ hội đầu tư đối với từng cổ phiếu trong tương lai."/>
        <meta property="og:image" content="https://bluestarinvestment.vn/bs_thumbnail.jpg" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link rel="shortcut icon" href="https://bluestarinvestment.vn/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
