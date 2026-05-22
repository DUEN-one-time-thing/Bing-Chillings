import { departments } from "./project-data";

type Member = {
  name: string;
  role?: string;
  image?: string;
};

function PersonPlaceholder() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Member photo placeholder">
      <circle cx="32" cy="24" r="11" />
      <path d="M14 54c2.6-10.7 9.2-16 18-16s15.4 5.3 18 16" />
    </svg>
  );
}

function ProfileCard({ member }: { member: Member }) {
  return (
    <article className="profileCard">
      <div className="profileImage">
        {member.image ? (
          <img src={member.image} alt={`${member.name} portrait`} />
        ) : (
          <PersonPlaceholder />
        )}
      </div>
      <div className="profileOverlay">
        {member.role && <p className="memberRole">{member.role}</p>}
        <h3>{member.name}</h3>
      </div>
    </article>
  );
}

export function TeamDepartments() {
  return (
    <div className="departmentGrid">
      {departments.map((department) => (
        <article className="departmentCard reveal" key={department.title}>
          <div className="departmentIntro">
            <p className="eyebrow">Subteam</p>
            <h2>{department.title}</h2>
            <p>{department.description}</p>
          </div>

          <div className="profilesGrid">
            {department.members.map((member) => (
              <ProfileCard member={member} key={member.name} />
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
