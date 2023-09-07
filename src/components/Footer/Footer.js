import React from 'react'
import { fbIcon, instagramIcon, pinteresIcon, tiktokIcon, youtubeIcon } from '../../icon'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
          <div className='footer-left'>
              <div className='footrer-left-top'>
                  <h3>T SHOP</h3>
                  <span>info@mysite.ru</span>
                  <span>Тел.: +7 123-456-7890</span>
              </div>
              <div className='footrer-left-bottom'>
                  <a target='_blank' href="https://www.facebook.com/">{fbIcon}</a>
                  <a target='_blank'  href="https://www.instagram.com/">{instagramIcon}</a>
                  <a target='_blank'  href="https://www.youtube.com/">{youtubeIcon}</a>
                  <a target='_blank'  href="https://www.pinterest.com/">{pinteresIcon}</a>
                  <a target='_blank'  href="https://www.tiktok.com/">{tiktokIcon}</a>
              </div>
          </div>
          <div className='footer-right'>
              <div className='footer-menu'>
                  <ul>
                     <li className='ul-title'>За покупками</li>
                     <li>Новинки</li>
                     <li>Женщинам</li>
                     <li>Мужчинам</li>
                  </ul>

                  <ul>
                      <li className='ul-title'>Магазин</li>
                      <li>О нас</li>
                      <li>Подписаться</li>
                      <li>Вопросы и ответы</li>
                  </ul>

                  <ul>
                      <li className='ul-title'>Условия использования</li>
                      <li>Политика магазина</li>
                      <li>Доставка и возврат</li>
                      <li>Способы оплаты</li>
                  </ul>
              </div>
              <div className='footer-right-bottom'>
                  <h3>© 2035 T SHOP. Сайт создан на Wix.com</h3>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Footer