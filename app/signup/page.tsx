'use client';

import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

// ✅ Extend window for reCAPTCHA
declare global {
  interface Window {
    recaptchaVerifier?: import('firebase/auth').RecaptchaVerifier;
  }
}

export default function SignupPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // ✅ Setup invisible reCAPTCHA
  useEffect(() => {
    if (!window.recaptchaVerifier) {
      const container = document.getElementById('recaptcha-container');
      if (container) {
       window.recaptchaVerifier = new RecaptchaVerifier(
  auth,
  'recaptcha-container',
  {
    size: 'invisible',
    callback: () => {},
  }
);

      } else {
        console.error('reCAPTCHA container not found');
      }
    }
  }, []);

  // ✅ Auto redirect if already logged in
  useEffect(() => {
    if (status === 'authenticated') {
      setLoading(true);
      router.push('/');
    }
  }, [status]);

  // ✅ Send OTP
  const handlePhoneSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[9][8]\d{8}$/.test(phone)) {
      toast.error('Enter a valid 10-digit Nepal phone number');
      return;
    }

    try {
      const appVerifier = window.recaptchaVerifier!;
      const confirmation = await signInWithPhoneNumber(auth, `+977${phone}`, appVerifier);
      setConfirmationResult(confirmation);
      toast.success('OTP sent!');
    } catch (err: any) {
      console.error('Phone sign-in error:', err);
      toast.error(err?.message || 'Failed to send OTP');
    }
  };

  // ✅ Verify OTP
  const verifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await confirmationResult.confirm(otp);
      toast.success('Signup successful!');
      router.push('/');
    } catch (err) {
      console.error('OTP verification error:', err);
      toast.error('Invalid OTP');
      setLoading(false);
    }
  };

  // ✅ Show loader
  if (loading || status === 'loading') {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white border-opacity-40"></div>
        <span className="text-lg font-semibold">Redirecting...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-800 text-white flex flex-col items-center justify-center px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-white/20">
        <h1 className="text-3xl font-extrabold mb-6 text-center">Create Account</h1>

        {/* Social Signup */}
        <div className="space-y-4 mb-6">
          <button
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition"
          >
            Sign up with Google
          </button>
          <button
            onClick={() => signIn('github', { callbackUrl: '/' })}
            className="w-full px-4 py-2 bg-gray-800 hover:bg-gray-900 rounded-lg font-semibold transition"
          >
            Sign up with GitHub
          </button>
        </div>

        <div className="text-center my-4 text-gray-400">or use phone</div>

        {/* Phone Signup */}
        {!confirmationResult ? (
          <form onSubmit={handlePhoneSignup} className="space-y-4">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number (98xxxxxxxx)"
              className="w-full px-4 py-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
            >
              Send OTP
            </button>
            <div id="recaptcha-container"></div>
          </form>
        ) : (
          <form onSubmit={verifyOtp} className="space-y-4">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full px-4 py-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
            >
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
