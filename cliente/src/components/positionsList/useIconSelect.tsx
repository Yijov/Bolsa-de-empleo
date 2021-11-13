import React, { useEffect, useState } from "react";

import { JobPost } from "../../models";

import {
  MdInvertColors,
  MdPending,
  MdWifiCalling,
  MdHowToReg,
  MdCardTravel,
  MdPermDataSetting,
  MdCallToAction,
  MdStream,
  MdDeveloperMode,
  MdPieChart,
  MdBluetoothDrive,
} from "react-icons/md";

import { BiPlusMedical } from "react-icons/bi";

const useIconAsignment = (category: string) => {
  const { categories } = JobPost;
  const [icon, seticon] = useState(<MdPending />);

  useEffect(() => {
    switch (category.toLowerCase()) {
      case categories.diseño.toLowerCase():
        seticon(<MdInvertColors />);
        break;
      case categories.educacion.toLowerCase():
        seticon(<MdCallToAction />);
        break;
      case categories.informatica.toLowerCase():
        seticon(<MdDeveloperMode />);
        break;
      case categories.ingenieria.toLowerCase():
        seticon(<MdPermDataSetting />);
        break;
      case categories.medicina.toLowerCase():
        seticon(<BiPlusMedical />);
        break;
      case categories.mercadeo.toLowerCase():
        seticon(<MdPieChart />);
        break;
      case categories.publicidad.toLowerCase():
        seticon(<MdInvertColors />);
        break;
      case categories.sevicio_al_cliente.toLowerCase():
        seticon(<MdHowToReg />);
        break;
      case categories.software.toLowerCase():
        seticon(<MdDeveloperMode />);
        break;
      case categories.tecnologia.toLowerCase():
        seticon(<MdInvertColors />);
        break;
      case categories.telecomunicaciones.toLowerCase():
        seticon(<MdWifiCalling />);
        break;
      case categories.transporte.toLowerCase():
        seticon(<MdBluetoothDrive />);
        break;
      case categories.ventas.toLowerCase():
        seticon(<MdStream />);
        break;
      case categories.derecho.toLowerCase():
        seticon(<MdCardTravel />);
        break;
      default:
        seticon(<MdPending />);
        break;
    }
    // eslint-disable-next-line
  }, [category]);
  return icon;
};

export default useIconAsignment;
