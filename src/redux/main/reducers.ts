import { FILTER_FAVORITES, SORT_BY_NEW, SORT_BY_POPULAR } from "./actions"

const initialState = {
  info: [
    {
      url: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
      date: '2022-05-11T19:24:54.127Z',
      favorite: true,
      popular: 260
    },
    {
      url: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&w=1000&q=80',
      date: '2022-06-11T19:24:54.127Z',
      favorite: false,
      popular: 783
    },
    {
      url: 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',
      date: '2022-04-11T19:24:54.127Z',
      favorite: false,
      popular: 254
    },
    {
      url: 'https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-760x400.png',
      date: '2022-05-16T19:24:54.127Z',
      favorite: true,
      popular: 301
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQRXWBKMqCQ4zssn7Ik5PI7IY0gZwih_i_g&usqp=CAU',
      date: '2022-05-08T19:24:54.127Z',
      favorite: true,
      popular: 567
    },
    {
      url: 'https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4=',
      date: '2021-05-11T19:24:54.127Z',
      favorite: false,
      popular: 232
    },
  ],
}

export const homeReducer = (state = initialState, action: {type:string}) => {
  let newState;

  switch (action.type) {
    case FILTER_FAVORITES:
      newState = { ...state, info: [...initialState.info].filter((item) => item.favorite) };
      break;
    case SORT_BY_NEW:
      newState = { ...state, info: [...initialState.info].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()) };
      break;
    case SORT_BY_POPULAR:
      newState = { ...state, info: [...initialState.info].sort((a, b) => b.popular - a.popular) };
      break;
    default:
      newState = state;
  };
  return newState;
};













// import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//     info: [
//         {
//             url: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
//             date: '2022-05-11T19:24:54.127Z',
//             favorite: true,
//             popular: 260
//         },
//         {
//             url: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&w=1000&q=80',
//             date: '2022-06-11T19:24:54.127Z',
//             favorite: false,
//             popular: 783
//         },
//         {
//             url: 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',
//             date: '2022-04-11T19:24:54.127Z',
//             favorite: false,
//             popular: 254
//         },
//         {
//             url: 'https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-760x400.png',
//             date: '2022-05-16T19:24:54.127Z',
//             favorite: true,
//             popular: 301
//         },
//         {
//             url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQRXWBKMqCQ4zssn7Ik5PI7IY0gZwih_i_g&usqp=CAU',
//             date: '2022-05-08T19:24:54.127Z',
//             favorite: true,
//             popular: 567
//         },
//         {
//             url: 'https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4=',
//             date: '2021-05-11T19:24:54.127Z',
//             favorite: false,
//             popular: 232
//         },
//     ],
// }

// type initialState = {};
// type info = {
//     url: string,
//     date: string,
//     favorite: boolean,
//     popular: number
// }

// const infoSlice = createSlice({
//     name: 'info',
//     initialState,
//     reducers: {
//         filterFavorites(state) {
//             state.info = [...initialState.info].filter((item) => item.favorite);
//         },
//         sortByPopular(state) {
//             state.info = [...initialState.info].sort((a, b) => a.popular - b.popular);
//         },
//         sortByNew(state) {
//             state.info = [...initialState.info].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
//         },
//     },
// })

// export const { filterFavorites, sortByPopular, sortByNew } = infoSlice.actions

// export default infoSlice.reducer;





