"use client";

import Link from "next/link";

type EntityType = "grape" | "region" | "technique";

const typeStyles: Record<EntityType, string> = {
  grape: "bg-burgundy-100 text-burgundy-700 hover:bg-burgundy-200",
  region: "bg-gold-300/20 text-gold-600 hover:bg-gold-300/30",
  technique: "bg-cream-200 text-burgundy-600 hover:bg-cream-300",
};

const typeHref: Record<EntityType, string> = {
  grape: "/grapes",
  region: "/regions",
  technique: "/techniques",
};

interface EntityTagProps {
  type: EntityType;
  id: string;
  label: string;
}

export default function EntityTag({ type, id, label }: EntityTagProps) {
  return (
    <Link
      href={`${typeHref[type]}/${id}`}
      className={`entity-tag ${typeStyles[type]}`}
    >
      {label}
    </Link>
  );
}
