import React, { Component } from 'react';
import { DatGheAction } from '../redux/action/DatVeAction';
import {connect} from 'react-redux'

class GheBooking extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {

            let cssGhedaDat = ''
            let disable = false;
            if (ghe.daDat) {
                cssGhedaDat = 'gheDuocChon'
                disable = true
            }

            let cssGheDangDat = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangdat => gheDangdat.soGhe === ghe.soGhe)
            if (indexGheDangDat !== -1) {
                cssGheDangDat = 'gheDangChon'
            }

            return <button onClick={() => {
                this.props.datGhe(ghe)
            }} disabled={disable} className={`ghe ${cssGhedaDat} ${cssGheDangDat}`} key={index}>
                {ghe.soGhe}
            </button>

        })
    }

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return <button className='rowNumber' key={`hang ${index}`}>
                {hang.soGhe}
            </button>
        })

    }

    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div className='ml-3'>
                {this.props.hangGhe.hang}{this.renderSoHang()}
            </div>
        } else {
            return <div>
                {this.props.hangGhe.hang}{this.renderGhe()}
            </div>
        }

    }
    render() {
        return (
            <div className='text-light text-left ml-5 mt-3' style={{ fontSize: '20px' }}>
                {this.renderHangGhe()}
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(DatGheAction(ghe))
            
        }
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.DatVeReducer.danhSachGheDangDat
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GheBooking);
