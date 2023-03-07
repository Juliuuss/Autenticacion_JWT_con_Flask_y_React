import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";

export const Login = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ mode: "all" });

    const submitBack = async () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        await actions.login(email, password);
        if (
            localStorage.getItem("token") != null &&
            localStorage.getItem("user_id") != null
        )
            navigate("/home");
        else alert("Contraseña o usuario incorrecto");
    };
    return (
        <div className="">
            <div className="login position-absolute top-50 start-50 translate-middle ">
                <form id="formulario" onSubmit={handleSubmit(submitBack)}>
                    <div class="form-outline mb-4 ">
                        <input
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value:
                                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "Email no es valido",
                                },
                            })}
                            id="email"
                            class="form-control text-center"
                            placeholder="Email"
                        />
                        <p style={{ color: "red" }}>{errors.email?.message}</p>
                    </div>
                    <div class="form-outline mb-4">
                        <input
                            {...register("password", {
                                required: "Se rerquiere de contraseña",
                                pattern: {
                                    value:
                                        /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                                    message: "Contraseña no valida",
                                },
                            })}
                            type="password"
                            id="password"
                            class="form-control text-center"
                            placeholder="Contraseña"
                        />
                        <p style={{ color: "red" }}>{errors.password?.message}</p>
                    </div>
                    <div class="col d-flex justify-content-center">
                        <input
                            type="submit"
                            value="Acceder"
                            class="btn btn-primary btn-block mb-4 justify-content-center rounded-pill "
                        />
                    </div>

                </form>
            </div>
        </div>
    );
};