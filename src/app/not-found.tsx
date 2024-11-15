'use client';
import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-[100dvh] overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <main className="grow [&>*:first-child]:scroll-mt-16">
          <div className="relative bg-white dark:bg-slate-900 h-full">
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
              <div className="max-w-2xl m-auto mt-16">
                <div className="text-center px-4">
                  <div className="inline-flex mb-8"></div>
                  <div className="mb-6 text-white">
                    Hmm...this page doesn&apos;t exist. Try searching for something else!
                  </div>
                  <Link
                    href="/"
                    className="w-full btn bg-primaryMain hover:bg-blueTwo text-white animate-text-bounce absolute left-0">
                    Back To Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
