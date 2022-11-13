import { configureStore } from '@reduxjs/toolkit'
import { formReducer } from './features/formSclice'
import { productReducer } from './features/productSlice'
import { pageReducer } from './features/pageSlice'
// ...

export const store = configureStore({
  reducer: {
    form:formReducer,
    product:productReducer,
    page:pageReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch