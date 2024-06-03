"use client";

import * as yup from "yup";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextArea } from "@/components/textarea";
import { ReloadIcon } from "@radix-ui/react-icons";

type CreateAppointmentForm = {
  name: string;
  email: string;
  data: string;
};

const createAppointmentSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email().required("Email é obrigatório"),
  data: yup.string().required("Descrição é obrigatória"),
});

export function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CreateAppointmentForm>({
    resolver: yupResolver(createAppointmentSchema),
  });

  const handleSendEmail = async (data: CreateAppointmentForm) => {
    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        data: data.data,
      }),
    });

    if (response.ok) {
      alert("Email enviado com sucesso!");
    } else {
      alert("Parece que ocorreu um erro ao enviar seu email");
    }
  };

  return (
    <form
      className="w-full xl:w-4/12 z-50"
      onSubmit={handleSubmit(handleSendEmail)}
    >
      <Card className="w-full bg-black">
        <CardHeader>
          <CardTitle>Entrar em contato</CardTitle>
          <CardDescription>
            Preencha todos as informações abaixo, entraremos em contato o mais
            rápido possivel
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Qual seu nome?</Label>
              <Input
                {...register("name")}
                error={errors.name}
                placeholder="Alan Turing"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Qual seu e-mail?</Label>
              <Input
                {...register("email")}
                error={errors.email}
                placeholder="alan.turing@example.com"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Descreva o projeto</Label>
              <TextArea
                placeholder="Orçamento de um aplicativo simples para SmartTV"
                maxLength={255}
                error={errors.data}
                {...register("data")}
                className="h-32 max-h-52"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="w-full" type="submit">
            {isSubmitting ? (
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Enviar"
            )}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
