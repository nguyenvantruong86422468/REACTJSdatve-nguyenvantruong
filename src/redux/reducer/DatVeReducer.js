import { Dat_Ghe, Huy_Ghe } from "../action/DatVeType";

const stateDefault = {
    danhSachGheDangDat: []
}

const DatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case Dat_Ghe: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat]
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if (index !== -1) {
                danhSachGheDangDatUpdate.splice(index, 1)
            } else {
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return { ...state }
        }
        case  Huy_Ghe:{
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat]
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if (index !== -1) {
                danhSachGheDangDatUpdate.splice(index, 1)
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate
            return {...state}
        }
          
        default: return { ...state }
    }
}

export default DatVeReducer;