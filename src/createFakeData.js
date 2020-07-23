import Post from './models/post';

export default function createFakeData() {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 ${i}`,
    body: `Always on and durable
    With MongoDB Atlas, your self-healing clusters are made up of geographically distributed database instances to ensure no single point of failure. Want even better availability guarantees? Get multi-region fault tolerance by enabling cross-region replication. MongoDB Atlas also includes powerful features to enhance reliability for your mission-critical production databases, such as continuous backups and point-in-time recovery.
    Secure from the start
    MongoDB Atlas makes it easy to control access to your database. Your database instances are deployed in a unique Virtual Private Cloud (VPC) to ensure network isolation. Other security features include IP whitelisting or VPC Peering, always-on authentication, encryption at rest and encryption in transit, sophisticated role-based access management, and more.`,
    tags: ['가짜', '데이터'],
  }));

  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
