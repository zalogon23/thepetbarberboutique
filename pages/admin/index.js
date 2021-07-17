import Header from '../../components/Header'
import Favicon from '../../components/Favicon'
import client from "../../lib/client";
import queries from "../../lib/queries"
import CustomHead from '../../components/CustomHead';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

export default function Home() {
  const { loading, data } = useQuery(queries.getEmails);

  return (
    <>
      <CustomHead>
        <title>The Pet Barber Boutique | Dashboard</title>
        <Favicon />
      </CustomHead>
      <Header />
      {!loading &&
        <table className="text-white w-full max-w-2xl mx-auto mt-4">
          <thead>
            <tr className="bg-black">
              <th className="py-2 text-lg sm:rounded-tl">Nombre</th>
              <th className="py-2 text-lg sm:rounded-tr">Email</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.clients.map((client, id) => (
                <tr className={`${id % 2 === 0 ? "bg-blue-500" : "bg-blue-700"}`}>
                  <td className="px-4 py-1">{client.nombre}</td>
                  <td className="px-4 py-1">{client.email}</td>
                </tr>
              ))
            }
          </tbody>
          <tfoot className="bg-black">
            <tr>
              <td className="rounded-b px-4 py-2 text-lg" colSpan="2">Aca estan todos los usuarios registrados hasta el momento</td>
            </tr>
          </tfoot>
        </table>
      }
    </>
  )
}
