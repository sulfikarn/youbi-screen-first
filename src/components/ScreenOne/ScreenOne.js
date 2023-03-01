import { useForm } from "react-hook-form";
import './ScreenOne.css'

function ScreenOne({formSub}) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => formSub(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input
                {...register("tableName", {
                    required: true
                })}
                placeholder="Table Name"
            />
            {errors?.tableName?.type === "required" && <p>This field is required</p>}




            <input
                {...register("UniqueColumn", {
                    required: true
                })}
                placeholder="Unique column"
            />
            {errors?.UniqueColumn?.type === "required" && <p>This field is required</p>}




            <input
                {...register("columnName", {
                    required: true
                })}
                placeholder="Column Name"
            />
            {errors?.columnName?.type === "required" && <p>This field is required</p>}
            
            <button type="submit">Manual Update</button>
        </form>
    )
}

export default ScreenOne