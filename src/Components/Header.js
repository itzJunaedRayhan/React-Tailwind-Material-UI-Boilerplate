import React from 'react';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';

const Header = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold underline text-red-400 font-poppins">
                Hello world!
            </h1>
            <Button variant="contained"><AdbIcon/>Hello World</Button>
        </div>
    );
};

export default Header;