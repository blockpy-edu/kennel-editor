import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    newCourse: build.mutation<NewCourseApiResponse, NewCourseApiArg>({
      query: () => ({ url: `/v1/course`, method: "POST" }),
    }),
    courses: build.query<CoursesApiResponse, CoursesApiArg>({
      query: () => ({ url: `/v1/courses` }),
    }),
    login: build.mutation<LoginApiResponse, LoginApiArg>({
      query: (queryArg) => ({
        url: `/v1/login`,
        method: "POST",
        body: queryArg.loginSchema,
      }),
    }),
    me: build.query<MeApiResponse, MeApiArg>({
      query: () => ({ url: `/v1/me` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as serverApi };
export type NewCourseApiResponse = /** status 200 CourseSchema */ CourseSchema;
export type NewCourseApiArg = void;
export type CoursesApiResponse = /** status 200 CourseSchema */ CourseSchema[];
export type CoursesApiArg = void;
export type LoginApiResponse = /** status 200 UserSchema */ UserSchema;
export type LoginApiArg = {
  loginSchema: LoginSchema;
};
export type MeApiResponse = /** status 200 UserSchema */ UserSchema;
export type MeApiArg = void;
export type CourseSchema = {
  date_created?: string | null;
  date_modified?: string | null;
  endpoint?: string | null;
  external_id?: string | null;
  id?: number;
  is_default?: boolean | null;
  name?: string | null;
  service?: string | null;
  settings?: string | null;
  term?: string | null;
  url?: string | null;
  visibility?: string | null;
};
export type Error = {
  errors?: object;
  message: string;
};
export type UserSchema = {
  active?: boolean | null;
  confirmed_at?: string | null;
  date_created?: string | null;
  date_modified?: string | null;
  email?: string | null;
  first_name?: string | null;
  id?: number;
  last_name?: string | null;
  password?: string | null;
  proof?: string | null;
};
export type LoginSchema = {
  email: string;
  password: string;
};
export const {
  useNewCourseMutation,
  useCoursesQuery,
  useLoginMutation,
  useMeQuery,
} = injectedRtkApi;
