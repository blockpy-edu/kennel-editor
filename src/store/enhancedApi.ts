import {serverApi as generatedApi} from "./serverApi";

export const serverApi = generatedApi.enhanceEndpoints({
  addTagTypes: ['User', 'Course'],
  endpoints: {
    me: {
      providesTags: ['User']
    },
    login: {
      invalidatesTags: ['User', 'Course']
    },
    courses: {
      providesTags: ['Course']
    },
    newCourse: {
      invalidatesTags: ['Course']
    }
  }
});
