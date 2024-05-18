import React from "react"
import { Heading } from "../common/Heading"
import { contact } from "../data/dummydata"

export const Contact = () => {
  return (
    <>
      <div className='contact'>
        <div className='container'>
          <Heading title='ติดต่อเรา' />
          <div className='content flexsb'>
            <div className='right'>
              <form>
                <div className='flex'>
                  <input type='text' placeholder='ชื่อ - นามสกุล' data-aos='flip-left' />
                  <input type='text' placeholder='บริการที่ต้องการ' data-aos='flip-right' />
                </div>
                <input type='email' placeholder='อีเมลของคุณ' data-aos='flip-up' />
                <input type='text' placeholder='UID' data-aos="flip-down" />
                <button data-aos='zoom-in-up'>ส่งข้อมูล</button>
              </form>
            </div>
            <div className='left'>
              {contact.map((item) => (
                <div className='box' data-aos='zoom-in'>
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
