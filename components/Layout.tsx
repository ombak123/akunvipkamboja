import Head from "next/dist/shared/lib/head"

type LayoutProps = {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="scroll">
      <Head>
        <title>Akun Pro Gacor Online Slot - Maksimalkan Keuntungan Anda Saat Bermain</title>
        <link
            rel="canonical"
            href="http://www.akunvvipkamboja.com/"
            key="canonical"
          />
        <meta name="google-site-verification" content="dNniYZUIHCRXo48WgsbwcjOPvHRivvtM4Gf6ijCVA6I" />
        <meta name="description" content="Temukan keseruan bermain slot online dengan akun pro gacor di situs kami. Dapatkan panduan ultimate untuk trader agar bisa memaksimalkan keuntungan dari permainan slot online. Raih kemenangan besar dan nikmati pengalaman bermain yang tak terlupakan." />
        <meta name="keywords" content="AKUN PRO GACOR, akun pro gacor, akunpro, akunproserverindonesia, akunserverindonesia"/>
        <meta name="robots" content="index, follow" />
        <meta name="page-locale" content="id,en"/>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
        <meta content="true" name="HandheldFriendly"/>
        <meta content="width" name="MobileOptimized"/>
        <meta content="indonesian" name="language"/>
        <meta content='#F6890B' name='theme-color' />
        <meta name="supported-amp-formats" content="websites,stories,ads,email"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content="Akun Pro Gacor Online Slot - Maksimalkan Keuntungan Anda Saat Bermain"/>
        <meta name="twitter:description" content="Temukan keseruan bermain slot online dengan akun pro gacor di situs kami. Dapatkan panduan ultimate untuk trader agar bisa memaksimalkan keuntungan dari permainan slot online. Raih kemenangan besar dan nikmati pengalaman bermain yang tak terlupakan."/>
        <meta name="twitter:image:src" content="https://i.ibb.co/WKcVH5v/Whats-App-Image-2022-11-28-at-22-15-44.jpg"/>
        <meta name="twitter:player" content="https://www.youtube.com/"/>
        <meta property="og:title" content="Akun Pro Gacor Online Slot - Maksimalkan Keuntungan Anda Saat Bermain" />
        <meta property="og:description" content="Temukan keseruan bermain slot online dengan akun pro gacor di situs kami. Dapatkan panduan ultimate untuk trader agar bisa memaksimalkan keuntungan dari permainan slot online. Raih kemenangan besar dan nikmati pengalaman bermain yang tak terlupakan." />
        <meta name="og:image" content="https://i.ibb.co/WKcVH5v/Whats-App-Image-2022-11-28-at-22-15-44.jpg"/>
        <meta property="og:image:width" content="640"/>
        <meta property="og:image:height" content="167"/>
        <meta name="og:url" content="https://123nona.biz"/>
        <meta property="og:site_name" content="Akun Pro Gacor Online Slot - Maksimalkan Keuntungan Anda Saat Bermain" />
        <meta name="og:locale" content="ID_id"/>
        <meta name="og:video" content="https://www.youtube.com/"/>
        <meta name="og:type" content="website"/>
        <meta property="og:type" content="video" />
        <meta property="og:video" content="https://www.youtube.com/"/>
        <meta property="og:video:type" content="video/mp4"/>
        <meta property="og:video:width" content="560"/>
        <meta property="og:video:height" content="314"/> 
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="categories" content="gacor,akunprogacor,akunpro, slot gacor, slot online, judi online" />
        <meta name="language" content="ID"/>
        <meta name="rating" content="general"/>
        <meta name="copyright" content="ombak123"/>
        <meta name="author" content="ombak123"/>
        <meta name="distribution" content="global"/>
        <meta name="publisher" content="ombak123"/>
        <meta name="geo.placename" content="DKI Jakarta"/>
        <meta name="geo.country" content="ID"/>
        <meta name="geo.region" content="ID" />
        <meta name="tgn.nation" content="Indonesia"/>
      </Head>
      {children}
      <style jsx global>{`
        .scroll{
          width: 100vw;
          height: 100vh;
          overflow-y: scroll;
          overflow-x:hidden;
        }
        a {
          text-decoration: none;
        }
        body {
          font-family: Roboto, sans-serif;
          display:block;
          color: #fff;
          background-image: url("/img/bg10.jpg");
          background-size: cover;
          background-repeat: no-repeat;
        }
        div{
          box-sizing:border-box;
        }
        .mt{
          margin-top:12px;
        }
        .px{
          padding-left:12px;
          padding-right:12px;
        }
        .py{
          padding-top:6px;
          padding-bottom:6px;
        }
        .w-full{
          width: 100%;
        }
        .h-full{
          height: 100%;
        }
        .bg-white{
          background: #0e0e0e;
        }
        .mr-2{
          margin-right: 24px;
        }
        .center{
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .w-half{
          width:50%;
         }
      `}</style>
    </div>
  )
}
