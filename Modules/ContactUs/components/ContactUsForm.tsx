"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log("Form data:", data);
      // You can add your API call here
      reset();
    } catch (error) {
      console.error("Failed to send:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-4 space-y-6 pt-10 bg-white"
    >
      <div>
        <Label className="text-[35px]" htmlFor="name">
          Name
        </Label>
        <Input
          id="name"
          {...register("name", { required: "Name is required" })}
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label className="text-[35px]" htmlFor="email">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Enter a valid email",
            },
          })}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label className="text-[35px]" htmlFor="message">
          Message
        </Label>
        <Textarea
          id="message"
          {...register("message", { required: "Message is required" })}
          placeholder="Tell us how we can help you..."
          rows={5}
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full text-[15px]"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
