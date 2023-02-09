import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Info from '../components/Info'
import Layout from '../components/Layout'
import Nav from '../components/Nav'

export const config = {
  amp: true,
}

export default function kamboja() {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>Ombak123</title>
      </Head>
      <div className="footer">
        <a href="https://t.me/+beIbzpwmikBmZDBl" target='_blank'>
          <div className='footer-item'>
            <amp-img src="/img/tele.svg" width="20" height="20" alt="-"/>
            Telegram
          </div>
        </a>
        <a href="https://www.facebook.com/groups/1353211311865308" target='_blank'>
          <div className='footer-item'>
            <amp-img src="/img/fb.svg" width="20" height="20" alt="-"/>
            Facebook
          </div>
        </a>
        <a href="https://www.instagram.com/ombak123.id/" target='_blank'>
          <div className='footer-item'>
            <amp-img src="/img/ig.svg" width="20" height="20" alt="-"/>
            Instagram
          </div>
        </a>
        <a href="https://direct.lc.chat/14040600/" target='_blank'>
          <div className='footer-item'>
            <amp-img src="/img/wa.svg" width="20" height="20" alt="-"/>
            Live Chat
          </div>
        </a>
      </div>
      <div className='container'>
          <Nav/>
          <div className='highlight'>
            <a href='https://ombak123.org/account/register/akunprovip'>
              <amp-img
                  alt="highlight"
                  fallback=""
                  width="2"
                  height="1"
                  layout='responsive'
                  src="/img/bg.jpg"
                  ></amp-img>
              </a>
          </div>
          <Info/>
          <div className='content'>
            <h2>Akun Pro kamboja Server terbaik dan terpercaya tahun 2023</h2>
            <p>Akun Pro kamboja adalah sebuah server luar negeri yang berasal dari negara kamboja di buat untuk bertujuan memudahkan para member-member berasal dari server indonesia yang susah sekali untuk menang dan mendapatkan jackpot tinggi. para member tidak perlu memakan waktu lama untuk menang bermain di server kamboja ini, mereka hanya membutuhkan waktu 1 jam untuk mendapatkan kemenangan dari bandar-bandar slot indonesia. Akun Pro kamboja server kamboja ini sudah terpercaya oleh banyak member dari seluruh penjuru asia.</p>
            <p>Akun Pro kamboja Ini adalah operator slot yang hebat dan andal untuk Akun Pro kamboja ini dibuat salah satu tujuannya adalah untuk memudahkan para pemain game slot untuk memainkan gamenya dimana saja dan kapan saja anda bisa mengakses website Akun Pro kamboja kapan pun bisa diakses</p>
            <p>Akun Pro kamboja sangat mudah untuk di cari melalui mesin pencari google dengan kata kunci Akun Pro kamboja, Ketika kalian sudah mengakses website akun pro kamboja, kalian langsung saja klik tombol login/daftar untuk login ke server kamboja.</p>
          
            <h2>Akun Pro kamboja Server Alternatif member untuk mendapatkan jackpot</h2>
            <p>Akun Pro kamboja adalah Server yang sudah terpercaya karena banyak sekali member lama hingga baru terus bermain menggunakan server kamboja ini oleh karena itu di Akun Pro kamboja banyak sekali member yang mendapatkan jackpot dari sini, tunggu apa lagi kalian langsung saja daftarkan diri anda di Sever Akun Pro kamboja dan menangkan dan jackpot disini.</p>
            <p>Akun Pro kamboja selalu memberikan suatu hal yang terbaik untuk setiap member yang daftar dan bermain menggunakan server kamboja.</p>

            <h2>Server kamboja Selalu Gacor 24 Jam setiap harinya.</h2>
            <p>Server kamboja selalu gacor untuk setiap harinya selama 24 jam nonstop, dan selalu memberikan pelayanan terbaik. untuk membernya setiap hari daftar dan login menggunakan server kamboja akan selalu diberikan kemenangan dan kemudahan agar mendapatkan kenyamanan bermain oleh karena itu server kamboja selalu menjadi rekomendasi untuk bermain di server luar.</p>
          
          </div>
      </div>
      <style jsx>{`
      .footer a{
        text-decoration: none;
        color: #fff;
      }
      .footer-item{
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        font-size: 12px;
        gap:6px;
      }
      .footer{
        display: grid;
        grid-template-columns: auto auto auto auto;
        z-index: 999;
        position:fixed;
        bottom:0;
        left:0;
        height:50px;
        background: #000000e3;
        right:0;
        align-content:center;
        justify-items:center;
      }
      @media (max-width:767px){
        .container{
          margin: auto;
        }
      }
      @media (min-width:768px){
        .container{
          max-width: 720px;
          margin:12px auto;
          border-radius: 0.25rem;
        }
      }
      @media (min-width:992px){
        .container{
          max-width:960px;
        }
      }
      @media (min-width:1200px){
        .container{
          width:1000px
        }
      }
      .container{
        display:block;
        padding: 12px 15px;
        box-sizing:border-box;
        background: rgba(0,0,0,0.7);
       }
      .content p {
        text-align: justify;
        color: #fff;
      }
      .content h2 {
        color: #6ba3f6
      }
      `}</style>
    </Layout>
  )
}
