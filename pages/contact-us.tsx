import React,{useRef, useState} from 'react'
import { NextPage } from 'next';
import Nav from '../src/components/navigation';
import styles from '../styles/Home.module.css';
import { Text, Button, TextInput, Textarea} from '@mantine/core';
import { useForm } from '@mantine/form';
import Head from 'next/head';
import Circle from '../src/components/circle';
import Footer from '../src/sections/footer'
import { FiUser, FiMail, FiPhone } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ContactUs : NextPage = () => {
  const [formDisabled, setFormDisabled] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm({
    initialValues: {
      name:'',
      email: '',
      phone: '',
      message: ''
    },

    validate: {
      name: (value) => (value.trim().length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid Email Address'),
      phone: (value) => (/(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/.test(value) ? null : 'Please Enter a Valid Phone Number'),
      message: (value) => (value.trim().length > 10 ? null : 'Message must be more than 10 characters.'),
    },
  });


  const sendEmail = (formValues: any) => {

    setFormDisabled(true);
    const id = toast.loading('Sending Message');

  emailjs.send('service_2ssz86k', 'template_d1rvez8', formValues, 'user_2RR2joOVprhH8K4kCh16P')
    .then(function(response) {
       toast.update(id, {
          render: 'Message has been sent successfully.',
          type: 'success',
          isLoading: false,
          autoClose: 3000,
       });
      form.reset();
    }, function(error) {
       toast.update(id, {
          render: 'Something wrong happened. Please try again.',
          type: 'error',
          isLoading: false,
          autoClose: 3000,
        });
    });

    setFormDisabled(false);
  };
  return (
    <div>
			<Head>
				<title>Contact Us</title>
				<meta name="description" content="Send us a message if you have more questions. We would respond in less than 24 hours." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Nav />
        <ToastContainer />
        <div className="relative h-[30vh] xl:h-[50vh] w-[100vw] py-16 bg-gradient-to-r from-primary to-secondary flex justify-center items-center">
          <Circle className="absolute w-[35vw] h-[35vw] md:h-[20vw] md:w-[20vw] rounded-full md:left-[-10vw] left-[-20vw]" />

          <div className='w-[80vw] text-white z-[2]'>
            <h1 className='text-2xl lg:text-4xl mb-7'>Contact Us</h1>
            <Text className='text-sm leading-5'></Text>
          </div>
          <div className='w-[40vw] hidden' />
          <div className="absolute bg-hero-image bg-cover bg-center scale-x-[-1] w-[40vw] h-[80vh] rounded-tr-[245px] bottom-0 right-0 hidden"></div>
        </div>

        <div className='w-[80vw] lg:w-[40vw] py-16'>
          <form ref={formRef} onSubmit={form.onSubmit(sendEmail)}>
            <p className='mb-8'>Please leave us a message and we will get back to you shortly.</p>
            <TextInput name='name' icon={<FiUser />} placeholder="Full Name" styles={{input: {fontSize: 16}, error: {fontSize:14, marginLeft: 25}}} radius="xl" size="xl" {...form.getInputProps('name')}/>
          <div className="flex flex-col gap-5 my-5">
              <TextInput
                name='email'
                icon={<FiMail />} 
                placeholder="Email Address" 
                styles={{ input: { fontSize: 16 }, error: {fontSize:14, marginLeft: 25} }}
                radius="xl" 
                size="xl" 
                {...form.getInputProps('email')}
              />
            <TextInput name='phone' icon={<FiPhone />} placeholder="Phone Number" styles={{input: {fontSize: 16}, error: {fontSize:14, marginLeft: 25}}} radius="xl" size="xl" {...form.getInputProps('phone')}/>
          </div>
            <Textarea
              name='message'
              placeholder="Your Message"
              autosize 
              minRows={6} 
              maxRows={8} 
              styles={{input: {fontSize: 16}, error: {fontSize:14, marginLeft: 25}}}
              size="xl" 
              radius="lg" 
              {...form.getInputProps('message')}
            />
          <div className="flex justify-end my-8">
            <Button disabled={formDisabled} type="submit" radius="xl" size="xl" className='bg-secondary text-sm uppercase hover:bg-secondary'>
            Send Message
          </Button>
          </div>
          </form>
        </div>

			</main>

			<Footer />
		</div>
  )
}

export default ContactUs