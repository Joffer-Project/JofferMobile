import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ModalComponent = ({ modalVisible, setModalVisible }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(255, 118, 38, 1)', 'rgba(173, 65, 1, 1)']}
        style={styles.gradientBackground}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.modalContent}>
            <Image
              source={require('../assets/joffer.png')}
              style={styles.image}
              resizeMode="contain"
            />
            
            <View style={styles.textContainer}>
              <Text style={styles.companyText}>Nokia</Text>
              <Text style={styles.infoText}>Established in 1865 as a paper mill in Finland, Nokia has traversed a remarkable journey to become a global titan in telecommunications and technology.{"\n"}{"\n"} 

   


With a legacy deeply rooted in innovation and ingenuity, Nokia continues to drive progress in the ever-evolving landscape of telecommunications. As a frontrunner in network infrastructure and digital services, Nokia remains committed to connecting the world through reliable and secure communication technologies. 
{"\n"}{"\n"}
Leveraging its expertise in areas such as 5G, cloud networking, and digital health solutions, Nokia strives to empower individuals and enterprises alike, facilitating seamless connectivity and enabling transformative experiences in an                     increasingly interconnected world.
Beyond its technological prowess, Nokia upholds a steadfast dedication to social responsibility and sustainability. 
{"\n"}{"\n"}
Embracing a holistic approach to corporate citizenship, Nokia actively engages in initiatives aimed at fostering positive societal impact and environmental stewardship. 
{"\n"}{"\n"}
By harnessing the power of technology for the greater good, Nokia endeavors to build a more inclusive and sustainable future for generations to come.
</Text>
            </View>
            
            <View style={styles.textContainer}>
              <Text style={styles.companyText}>Job Offer </Text>
              <Text style={styles.infoText}>Database Engineer
Full time / On site                                                                120.000£/Year

{"\n"}{"\n"}Job Description:{"\n"}{"\n"} 
Nokia is seeking a talented and motivated Database Engineer to join our dynamic team. As a Database Engineer, you will play a crucial role in designing, implementing, and maintaining our database systems to ensure optimal performance, reliability, and scalability. You will collaborate closely with cross-functional teams to understand business requirements and translate them into efficient database solutions. Additionally, you will monitor database performance, troubleshoot issues, and implement security measures to safeguard sensitive data.

{"\n"}{"\n"}Responsibilities:{"\n"}{"\n"}
Design, implement, and maintain database systems, including schema design, indexing, and data migration.
Collaborate with software engineers and other stakeholders to develop database solutions that meet business requirements.
Optimize database performance through tuning, indexing, and query optimization techniques.
Implement and maintain database security measures to protect sensitive data.
Monitor database health and performance, and troubleshoot issues as they arise.
Participate in capacity planning and scalability initiatives to support business growth.
Stay updated on emerging technologies and best practices in database management.

{"\n"}{"\n"}Requirements:{"\n"}{"\n"}
Bachelor's degree in Computer Science, Information Technology, or related field.
Proven experience as a Database Engineer or similar role, with expertise in database design, implementation, and maintenance.
Proficiency in SQL and experience with relational database management systems (e.g., Oracle, MySQL, PostgreSQL).
Strong understanding of database architecture, indexing, and performance optimization techniques.
Experience with database security concepts and best practices.
Excellent problem-solving skills and ability to troubleshoot database issues effectively.
Strong communication and collaboration skills, with the ability to work effectively in cross-functional teams.
Knowledge of NoSQL databases (e.g., MongoDB, Cassandra) and cloud database services (e.g., AWS RDS, Azure SQL Database) is a plus.

{"\n"}{"\n"}Why Join Nokia:{"\n"}{"\n"}
Opportunity to work with cutting-edge technology and shape the future of telecommunications.
Collaborative and inclusive work culture that values innovation and diversity.
Competitive salary and benefits package.
Flexible work arrangements, including remote work options.
Professional development opportunities and career growth prospects.

If you're passionate about database engineering and eager to make an impact in a global organization, we'd love to hear from you. Join us at Nokia and be part of our journey to connect the world! Apply now by submitting your resume and cover letter detailing your relevant experience and why you're the perfect fit for this role.
{"\n"}{"\n"} Links: ......</Text>
            </View>
          
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientBackground: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '95%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  textContainer: {
    marginBottom: 20,
  },
  companyText: {
    fontFamily: 'Fredoka2',
    fontSize: 22,
    color: '#fff',
    marginBottom: 10,
  },
  infoText: {
    fontFamily: 'Fredoka',
    fontSize: 16,
    color: '#fff',
  },
  closeButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    fontFamily: 'Fredoka2',
    fontSize: 16,
    color: 'rgba(255, 118, 38, 1)',
  },
});

export default ModalComponent;
