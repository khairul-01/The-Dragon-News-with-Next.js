"use client"
import Link from 'next/link';
import Button from '@mui/material/Button';

const ErrorPage = () => {
    return (
        <div className='mt-5' >
            <h1 className="text-red-500 text-center text-2xl">
                Something went wrong!
            </h1>
            <Link href="/">
                <Button >
                    Back Home
                </Button>
            </Link>
        </div>
    );
};

export default ErrorPage;
