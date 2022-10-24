import React, {useState} from "react";

const MyForm = () => {

    const [values, setValues] = useState({
        name: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    }

    const {name} = values

    return(
        <>
            <div>
                <h1>Formulari simple</h1>
                <form>
                    <div>
                        <label>
                            Nom:
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <div>
                <h2>Valors del formulari</h2>
                <p>{JSON.stringify(values)}</p>
            </div>
        </>
    )

}

export default MyForm;