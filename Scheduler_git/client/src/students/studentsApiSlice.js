import apiSlice from "../app/apiSlice";

const studentsApiSlice = apiSlice.injectEndpoints({
    endpoints:(build) => ({
        getStudents: build.query({
            query:() => ({
                url: "/api/students"
            }),
            validateTages: ["Students"]
        }),
        addStudent: build.mutation({
           query:(student) => ({
                url: "/api/students",
                method: "POST",
                body: student
           }),
           invalidateTags: ["Students"]
        }),
        deleteStudent: build.mutation({
            query: ({id}) => ({
                url: "/api/students",
                method: "DELETE",
                body: {id: id}
            }),
            invalidateTags: ["Students"]
        })
    })
})

export const {useGetStudentsQuery, useAddStudentMutation, useDeleteStudentMutation} = studentsApiSlice