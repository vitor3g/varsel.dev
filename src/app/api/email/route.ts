import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(req: NextRequest) {
  const response = await req.json();

  const { data, error } = await resend.emails.send({
    from: "Acme <orcamentos@varsel.dev>",
    to: ["contato.varsel@gmail.com"],
    subject: `Orçamento para: ${response.name}`,
    html: `Email do cliente: <strong>${
      response.email
    }</strong><br/>Descrição do projeto: <strong>${
      response.data
    }</strong><br/>Nome do cliente: <strong>${
      response.name
    }</strong><br/>createdAt: <strong>${new Date().toISOString()}</strong>`,
  });

  if (error) {
    return NextResponse.json({ sucess: false }, { status: 500 });
  }

  return NextResponse.json({ sucess: true });
}
