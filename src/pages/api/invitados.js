import  connectDB from './mongooseinvitados';
import Invitado from '../../models/InvitadoSchema';

connectDB();

export default async function handler(req, res) {
  const { method, body, query } = req;

  switch (method) {
    case 'GET':
      try {
        if (query.id) {
          const invitado = await Invitado.findById(query.id);
          res.status(200).json(invitado);
        } else {
          const invitados = await Invitado.find();
          res.status(200).json(invitados);
        }
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener invitados' });
      }
      break;
    case 'POST':
      try {
        const { dni, nombre, apellido, pagado, usuarioInsta, usuarioTw } = body;
        const nuevoInvitado = new Invitado({ dni, nombre, apellido, pagado, usuarioInsta, usuarioTw });
        await nuevoInvitado.save();
        res.status(201).json({ status: 'Nuevo invitado agregado a la lista' });
      } catch (error) {
        res.status(500).json({ error: 'Error al agregar invitado' });
      }
      break;
    case 'PUT':
      try {
        const { dni, nombre, apellido, pagado, usuarioInsta, usuarioTw } = body;
        const newInvitado = { dni, nombre, apellido, pagado, usuarioInsta, usuarioTw };
        await Invitado.findByIdAndUpdate(query.id, newInvitado);
        res.status(200).json({ status: 'Datos del invitado actualizados' });
      } catch (error) {
        res.status(500).json({ error: 'Error al actualizar invitado' });
      }
      break;
    case 'DELETE':
      try {
        await Invitado.findByIdAndRemove(query.id);
        res.status(200).json({ status: 'El invitado ha sido eliminado de la lista' });
      } catch (error) {
        res.status(500).json({ error: 'Error al eliminar invitado' });
      }
      break;
    default:
      res.status(404).json({ error: 'Ruta no encontrada' });
      break;
  }
}
