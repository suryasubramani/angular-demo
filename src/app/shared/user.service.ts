import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getuserDetails() {
    const apiURL = 'https://a.blazemeter.com/api/v4/user';
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization:
          'Basic ' +
          btoa(
            '76f041f02106031d625cc87a:7474595ca2fc74de8c9a6620d940c356a62d83eb48af9856168a55b21cb14da7f7ccd4c6'
          ),
      }),
    };
    // this.http.get<any>(apiURL, httpOptions).subscribe((data) => {
    //   console.log(data);
    // });
    let response = {
      api_version: 4,
      error: null,
      result: {
        id: 2015874,
        email: 'suriya.mudaliar@gmail.com',
        passwordUpdateTime: 1680346462,
        access: 1680347462,
        login: 1680346472,
        firstName: 'Jayasurya',
        lastName: 'Subramani',
        timezone: 0,
        enabled: true,
        roles: ['user', 'new-billing', 'authenticated'],
        keycloakGoogleRegister: false,
        apiTestingVersion: 0,
        created: 1680346462,
        updated: 1680346462,
        elev_io_user_hash:
          '05fc2cf8805be997a178f375daecacbf43c0a1387207043996d6bb9e43d5d573',
        defaultProject: {
          accountId: 1525728,
          accountName: 'Default Account',
          workspaceName: 'Default workspace',
          id: 1846738,
          name: 'Default project',
          userId: null,
          description: null,
          underMigration: null,
          created: 1680346462,
          updated: 1680346462,
          organizationId: null,
          workspaceId: 1577842,
        },
        defaultProjectId: 1846738,
        displayName: 'Jayasurya Subramani',
        features: [],
        mail: 'suriya.mudaliar@gmail.com',
        name: 'Jayasurya',
        preferences: {
          id: '64280d5f13c8122b8032f455',
          userId: 2015874,
          activePlatform: 'performance',
          visitedMockServices: true,
          activeProjectId: 1846738,
          activeOrganizationId: 1577842,
          activeWorkspaceId: 1577842,
          activeAccountId: 1525728,
          aggregateReportFields: [
            'labelName',
            'samples',
            'avgResponseTime',
            '90line',
            '95line',
            '99line',
            'minResponseTime',
            'maxResponseTime',
            'avgBytes',
            'avgThroughput',
            'errorsRate',
          ],
        },
      },
      request_id: '6428114d7b24a',
    };
    return response;
  }

  getWorkspaceList(accountId: number) {
    let response = {
      limit: 10,
      skip: 0,
      total: 1,
      hidden: 0,
      api_version: 4,
      error: null,
      result: [
        {
          id: 1577842,
          name: 'Default workspace',
          userId: 2015874,
          created: 1680346462,
          updated: 1680346462,
          enabled: true,
          dedicatedIpsEnabled: true,
          privateLocationsEnabled: true,
          owner: {
            id: 2015874,
            email: 'suriya.mudaliar@gmail.com',
            displayName: 'Jayasurya Subramani',
          },
          membersCount: 1,
          allowance: {
            amount: 9,
            type: 'credits',
          },
          accountId: 1525728,
        },
      ],
      request_id: '64284724264f1',
    };
    return response;
  }

  getWorkspaceProjects(workspaceId: number) {
    let response = {
      limit: 10,
      skip: 0,
      total: 1,
      hidden: 0,
      api_version: 4,
      error: null,
      result: [
        {
          id: 1846738,
          name: 'Default project',
          userId: null,
          description: null,
          created: 1680346462,
          updated: 1680346462,
          workspaceId: 1577842,
          testsCount: 1,
        },
      ],
      request_id: '64281cd95536e',
    };
    return response;
  }

  getProjectTestList(workspaceId: number) {
    let response = {
      limit: 10,
      skip: 0,
      total: 3,
      hidden: 0,
      api_version: 4,
      error: null,
      result: [
        {
          id: 12404534,
          name: 'Test Case 3',
          isNewTest: true,
          userId: 2015874,
          created: 1680352184,
          updated: 1680352184,
          creatorClientId: 'api',
          overrideExecutions: [
            {
              iterations: 1,
            },
          ],
          executions: [],
          shouldSendReportEmail: false,
          projectId: 1846738,
          lastUpdatedById: 2015874,
          configuration: {
            type: 'functionalGui',
            canControlRampup: false,
            targetThreads: 0,
            enableFailureCriteria: false,
            enableLoadConfiguration: true,
            testMode: 'script',
            extraSlots: 0,
            plugins: {
              thresholds: {
                thresholds: [],
                ignoreRampup: false,
                fromTaurus: false,
                slidingWindow: false,
              },
            },
          },
        },
        {
          id: 12404523,
          name: 'TestCase2',
          isNewTest: true,
          userId: 2015874,
          created: 1680351541,
          updated: 1680351587,
          creatorClientId: 'gui',
          overrideExecutions: [
            {
              concurrency: 20,
              executor: '',
              holdFor: '19m',
              locations: {
                'us-east4-a': 20,
              },
              locationsPercents: {
                'us-east4-a': 100,
              },
              rampUp: '1m',
              steps: 0,
            },
          ],
          executions: [
            {
              concurrency: 20,
              usersNotConfigured: false,
              holdFor: '19m',
              durationIsNotConfigured: false,
              iterationAndDurationDisabled: false,
              rampUp: '1m',
              steps: 0,
              locations: {
                'us-east4-a': 20,
              },
              locationsPercents: {
                'us-east4-a': 100,
              },
              scenario: 'default-scenario-12404523',
            },
          ],
          shouldSendReportEmail: true,
          projectId: 1846738,
          lastUpdatedById: 2015874,
          configuration: {
            type: 'taurus',
            dedicatedIpsEnabled: false,
            canControlRampup: false,
            targetThreads: 50,
            executionType: 'taurusCloud',
            enableLoadConfiguration: true,
            threads: 50,
            testMode: '',
            extraSlots: 0,
            plugins: {
              jmeter: {
                version: 'auto',
                consoleArgs: '',
                enginesArgs: '',
              },
              thresholds: {
                thresholds: [],
                ignoreRampup: false,
                fromTaurus: false,
                slidingWindow: false,
              },
            },
          },
        },
        {
          id: 12404443,
          name: 'My first HTTP test',
          isNewTest: true,
          userId: 2015874,
          lastRunTime: 1680346478,
          created: 1680346472,
          updated: 1680346477,
          creatorClientId: 'api',
          overrideExecutions: [
            {
              concurrency: 20,
              executor: 'taurus',
              holdFor: '19m',
              locations: {
                'harbor-58d3b97ff132adc0347b23c6': 20,
              },
              locationsPercents: {
                'harbor-58d3b97ff132adc0347b23c6': 100,
              },
              rampUp: '1m',
              steps: 0,
            },
          ],
          executions: [
            {
              concurrency: 20,
              usersNotConfigured: false,
              holdFor: '19m',
              durationIsNotConfigured: false,
              iterationAndDurationDisabled: false,
              rampUp: '1m',
              steps: 0,
              locations: {
                'harbor-58d3b97ff132adc0347b23c6': 20,
              },
              locationsWeighted: true,
              locationsPercents: {
                'harbor-58d3b97ff132adc0347b23c6': 100,
              },
              executor: 'jmeter',
              hasDataSources: false,
              scenario: 'http',
            },
          ],
          shouldSendReportEmail: true,
          projectId: 1846738,
          configuration: {
            location: 'harbor-58d3b97ff132adc0347b23c6',
            duration: 20,
            type: 'taurus',
            concurrency: 20,
            executionType: 'taurusCloud',
            enableFailureCriteria: false,
            enableMockServices: false,
            enableLoadConfiguration: true,
            scriptType: 'taurus',
            filename: 'blazemeter_url_test_script.yaml',
            testMode: 'http',
            extraSlots: 0,
            plugins: {
              taurus: {
                filename: 'blazemeter_url_test_script.yaml',
              },
              thresholds: {
                thresholds: [],
                ignoreRampup: false,
                fromTaurus: false,
                slidingWindow: false,
              },
            },
          },
        },
      ],
      request_id: '642823bf26a78',
    };
    return response;
  }
}
