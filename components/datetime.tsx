"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Clock, Globe, VideoIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";

export default function BookingPage() {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-6xl font-bold tracking-tight">
            READY TO TAKE A LEAP?
          </h1>
          <p className="mb-2 text-xl text-gray-400">
            Let's grow together! Share your business plan, and we'll bring it to
            life.
          </p>
          <p className="text-lg">
            <span className="text-emerald-500">200+ Success Stories</span>
            <span className="text-gray-400"> and counting!</span>
          </p>
        </div>

        {/* Booking Card */}
        <Card className="mx-auto max-w-5xl border-0 bg-white">
          <CardContent className="grid gap-4 p-6 md:grid-cols-2">
            {/* Left Column - Meeting Details */}
            <div className="space-y-6 border-r border-gray-200 pr-6">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>SR</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm text-gray-500">
                    Saymon/Redwan @rednsay
                  </p>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Get your free design & development strategy, book a call
                    now!
                  </h2>
                </div>
              </div>

              <p className="text-gray-600">
                Let's talk about your vision and bring it to life with "CODE".
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  30m
                </div>
                <div className="flex items-center gap-2">
                  <VideoIcon className="h-4 w-4" />
                  Google Meet
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Asia/Karachi
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-center">
              <Input name="name" placeholder="Enter your name" type="text" className="bg-white" />
              <Input name="email" placeholder="Enter your email" type="text" className="bg-white" />
              <Input name="description" placeholder="Enter any additional information" type="text" className="bg-white" />
              <DatePicker />
              <Input name="time"  type="time" className="text-black bg-white" />
              <Button className="bg-black text-white" type="submit">Submit</Button>
            </div>




            {/* Right Column - Time Slots
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  12h
                </Button>
                <Button variant="outline" size="sm">
                  24h
                </Button>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-900">Wed 05</p>
                {["9:00pm", "9:30pm", "11:00pm", "11:30pm"].map((time) => (
                  <Button key={time} variant="outline" className="w-full justify-start text-gray-600">
                    {time}
                  </Button>
                ))}
              </div>
            </div> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
