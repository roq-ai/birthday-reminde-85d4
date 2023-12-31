import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { familyMemberValidationSchema } from 'validationSchema/family-members';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.family_member
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getFamilyMemberById();
    case 'PUT':
      return updateFamilyMemberById();
    case 'DELETE':
      return deleteFamilyMemberById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getFamilyMemberById() {
    const data = await prisma.family_member.findFirst(convertQueryToPrismaUtil(req.query, 'family_member'));
    return res.status(200).json(data);
  }

  async function updateFamilyMemberById() {
    await familyMemberValidationSchema.validate(req.body);
    const data = await prisma.family_member.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteFamilyMemberById() {
    const data = await prisma.family_member.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
