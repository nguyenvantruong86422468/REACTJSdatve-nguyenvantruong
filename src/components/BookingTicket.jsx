import React, { Component } from 'react';
import './BookingTicket.css';
import GheBooking from './GheBooking';
import ThongtinGhe from './ThongtinGhe';
import data from '../data/danhSachGhe.json';

export default class BookingTicket extends Component {
  renderdanhsachghe = () => {

    return data.map((hangGhe, index) => {
      return <div>
        <GheBooking hangGhe={hangGhe} key={index} />
      </div>
    })
  }

  render() {
    return (
      <div className='conter'>
        <div className='activity'>
          <div className='container-fluid'>
            <div className="row">
              <div className=" col-7 text-center">
                <h1 className='text-warning display-4'>ĐẶT VÉ Xem Phim CEYBERLEARN</h1>
                <div className=' text-warning title'>Màn hình</div>
                <div className='' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div className='screen'></div>
                  {this.renderdanhsachghe()}
                </div>

              </div>
              <div className="col-4">
                <h1 style={{ fontSize: '30px' }} className='text-light mt-2'>DANH SÁCH GHẾ BẠN CHỌN</h1>
                <ThongtinGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
