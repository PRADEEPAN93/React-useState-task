import React, { useState } from 'react';

export default function RegForm() {

    const [user, setUser] = useState({
        name: "pradeepan",
        age: 22,
        gender: "Male",
        isMarried: true,
        country: "India"
    });

    function ChengeHandler(e) {
        const name = e.target.name;
        const value = e.target.type === "checkbox"
            ? e.target.checked
            : e.target.value;

        setUser({ ...user, [name]: value });
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>{user.gender}</td>
                    </tr>
                    <tr>
                        <td>Married</td>
                        <td>{user.isMarried ? "Married" : "Not Married"}</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>{user.country }</td>
                    </tr>
                </tbody>
            </table>

            <form>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={user.name}
                    onChange={ChengeHandler}
                    name="name"
                />

                <input
                    type="number"
                    placeholder="Age"
                    value={user.age}
                    onChange={ChengeHandler}
                    name="age"
                />

                <div className='gender'>
                    <label htmlFor="male">
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="Male"
                            checked={user.gender === "Male"}
                            onChange={ChengeHandler}
                        />
                        Male
                    </label>

                    <label htmlFor="female">
                        <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="Female"
                            checked={user.gender === "Female"}
                            onChange={ChengeHandler}
                        />
                        Female
                    </label>
                </div>

                <label htmlFor="isMarried">
                    <input
                        type="checkbox"
                        id="isMarried"
                        name="isMarried"
                        checked={user.isMarried}
                        onChange={ChengeHandler}
                    />
                    Is Married
                </label>
                <div className='select-div'>
                    <label htmlFor='country'>seleect Country:</label>
                    <select name="country" id="country" value={user.country} onChange={ChengeHandler}>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                    </select>
                </div>
            </form>
        </>
    );
}
