"use client";

import { Modal } from "@/shared/ui/Modal";
import { ArrowSquareOutIcon, XIcon } from "@phosphor-icons/react";
import { useState } from "react";

import { WORK_MODEL } from "../constants";
import { Qualification } from "@/entities/qualification/model/qualification";

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
        className="group mt-2 inline-flex cursor-pointer items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary transition-all hover:bg-white hover:shadow-neu-flat active:scale-95 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-800"
      >
        Ver mais
        <ArrowSquareOutIcon size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </button>

      <Modal open={open} toggleOpen={() => setOpen(!open)}>
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
              {qualification.title}
            </h3>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="group cursor-pointer rounded-xl p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Close"
            >
              <XIcon className="text-zinc-500 group-hover:text-primary transition-colors" size={24} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Empresa</span>
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">{qualification.organization}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Período</span>
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">{qualification.startDate} — {qualification.endDate}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Localização</span>
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                {qualification.country}, {qualification.state}, {qualification.city}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Modelo</span>
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">{WORK_MODEL[qualification.workModel]}</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-zinc-200 dark:border-zinc-800 pt-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Descrição</span>
              <p className="whitespace-pre-line text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {qualification.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-2">
              {qualification.certificateUrl && (
                <a
                  href={qualification.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 px-4 py-2 text-sm font-bold text-primary transition-all hover:scale-105 active:scale-95"
                >
                  <ArrowSquareOutIcon size={18} />
                  Certificado
                </a>
              )}
              {qualification.workedAppUrl && (
                <a
                  href={qualification.workedAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 px-4 py-2 text-sm font-bold text-primary transition-all hover:scale-105 active:scale-95"
                >
                  <ArrowSquareOutIcon size={18} />
                  Ver Projetos
                </a>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
