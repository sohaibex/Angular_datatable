import { PostModel } from './../../../models/Posts.model';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';


export const loadPosts = createAction(
    '[Courses List] Load Posts via Service',
);

export const PostsLoaded = createAction(
    '[Courses Effect] Courses Loaded Successfully',
    props<{ courses: Course[] }>()
);

export const createPost = createAction(
    '[Create Course Component] Create Course',
    props<{ course: Course }>()
);

export const deletePost = createAction(
    '[Courses List Operations] Delete Course',
    props<{ courseId: string }>()
);

export const updatePost = createAction(
    '[Courses List Operations] Update Course',
    props<{ update: Update<PostModel> }>()
);

export const PostsActionTypes = {
    loadPosts,
    PostsLoaded,
    createPost,
    deletePost,
    updatePost
};