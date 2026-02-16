"use client";

import { Modal } from "@/components/_UI/Modal";
import { ArrowSquareOutIcon, XIcon } from "@phosphor-icons/react";
import { useState } from "react";

import { WORK_MODEL } from "../constants";
import { Qualification } from "@/models/qualification";

interface QualificationInfoModalProps {
  qualification: Qualification;
}

export function QualificationInfoModal({
  qualification,
}: QualificationInfoModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="mt-2 block cursor-pointer bg-transparent text-sm leading-5 text-primary transition-[0.2s] hover:text-purple-800"
      >
        Ver mais
      </button>

      <Modal open={open} toggleOpen={() => setOpen(!open)} height={50}>
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-primary">
              {qualification.title}
            </h3>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="cursor-pointer bg-transparent"
              aria-label="Close"
            >
              <XIcon className="text-primary" size={32} />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1">
              <strong className="font-bold">Empresa:</strong>
              <span>{qualification.organization}</span>
            </div>
            <div className="flex items-center gap-1">
              <strong className="font-bold">Data inicio:</strong>
              <span>{qualification.startDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <strong className="font-bold">Data fim:</strong>
              <span>{qualification.endDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <strong className="font-bold">Localização:</strong>
              <span>
                {qualification.country}, {qualification.state},{" "}
                {qualification.city}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <strong className="font-bold">Modelo:</strong>
              <span>{WORK_MODEL[qualification.workModel]}</span>
            </div>
            {qualification.certificateUrl && (
              <div className="flex items-center gap-1">
                <strong className="font-bold">Certificado:</strong>
                <a
                  href={qualification.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center gap-1 transition-[0.2s] hover:text-purple-800 [&_svg]:fill-primary [&_svg]:text-primary hover:[&_svg]:fill-purple-800 hover:[&_svg]:text-purple-800"
                >
                  {qualification.certificateId}
                  <ArrowSquareOutIcon width={20} height={20} />
                </a>
              </div>
            )}
            {qualification.workedAppUrl && (
              <div className="flex items-center gap-1">
                <strong className="font-bold">Projetos Trabalhados:</strong>
                <a
                  href={qualification.workedAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center gap-1 transition-[0.2s] hover:text-purple-800 [&_svg]:fill-primary [&_svg]:text-primary hover:[&_svg]:fill-purple-800 hover:[&_svg]:text-purple-800"
                >
                  {qualification.workedAppName}
                  <ArrowSquareOutIcon width={20} height={20} />
                </a>
              </div>
            )}
            <strong className="font-bold">Descrição:</strong>
            <p className="whitespace-pre-line text-justify">
              {qualification.description}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
