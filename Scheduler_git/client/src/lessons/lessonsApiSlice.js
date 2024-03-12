import apiSlice from "../app/apiSlice";
import DecodeToken from "../auth/decodeToken";
const lessonsApiSlice = apiSlice.injectEndpoints({
    endpoints:(build) => ({
        getLessons: build.query({
            query:() => ({
                url: "/api/lessons"
            }),
            validateTages: ["Lessons"]
        }),
        addLesson: build.mutation({
           query:(lesson) => ({
                url: "/api/lessons",
                method: "POST",
                body: lesson
           }),
           invalidateTags: ["Lessons"]
        }),
        deleteLesson: build.mutation({
            query: ({id}) => ({
                url: "/api/lessons",
                method: "DELETE",
                body: {id: id}
            }),
            invalidateTags: ["Lessons"]
        }),
        getLessonsByUserID: build.query({
            query:() => ({
                url: "/api/lessons/teacher/"+DecodeToken()._id
            }),
            validateTages: ["Lessons"]
        }),
        
    })
})

export const {useGetLessonsQuery, useAddLessonMutation, useDeleteLessonMutation, useGetLessonsByUserIDQuery} = lessonsApiSlice