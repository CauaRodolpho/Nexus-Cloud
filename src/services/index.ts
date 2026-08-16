// ============================================================
// NEXUS CLOUD — Services Layer
// Prepared for real backend integration
// ============================================================

import type {
  ServerDTO,
  ServerMetricsDTO,
  PlanDTO,
  DatacenterDTO,
  LoginDTO,
  RegisterDTO,
  AuthTokenDTO,
  UserDTO,
  InvoiceDTO,
  TicketDTO,
  ApiResponse,
  PaginatedResponse,
} from '@/types'
import { API_BASE_URL } from '@/constants'

// ─── Base HTTP Client ─────────────────────────────────────────

class HttpClient {
  private baseUrl: string
  private defaultHeaders: HeadersInit

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    }
  }

  private getAuthHeaders(): HeadersInit {
    // Estratégia: credenciais via cookie (HttpOnly) quando disponível.
    // Se a API ainda exigir Bearer token no futuro, migraremos aqui.
    return {}
  }

  private async parseError(res: Response) {
    try {
      return await res.json()
    } catch {
      const text = await res.text()
      return { message: text || 'Request failed', status: res.status }
    }
  }

  async get<T>(path: string, options?: RequestInit): Promise<ApiResponse<T>> {
    const res = await fetch(`${this.baseUrl}${path}`, {
      ...options,
      credentials: 'include',
      headers: {
        ...this.defaultHeaders,
        ...this.getAuthHeaders(),
        ...options?.headers,
      },
    })
    if (!res.ok) throw await this.parseError(res)
    return res.json()
  }

  async post<T>(path: string, body: unknown, options?: RequestInit): Promise<ApiResponse<T>> {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      ...options,
      credentials: 'include',
      headers: {
        ...this.defaultHeaders,
        ...this.getAuthHeaders(),
        ...options?.headers,
      },
      body: JSON.stringify(body),
    })
    if (!res.ok) throw await this.parseError(res)
    return res.json()
  }

  async patch<T>(path: string, body: unknown): Promise<ApiResponse<T>> {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: { ...this.defaultHeaders, ...this.getAuthHeaders() },
      body: JSON.stringify(body),
    })
    if (!res.ok) throw await this.parseError(res)
    return res.json()
  }

  async delete<T>(path: string): Promise<ApiResponse<T>> {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: { ...this.defaultHeaders, ...this.getAuthHeaders() },
    })
    if (!res.ok) throw await this.parseError(res)
    return res.json()
  }
}


const http = new HttpClient(API_BASE_URL)

// ─── Auth Service ────────────────────────────────────────────

export const authService = {
  async login(credentials: LoginDTO): Promise<ApiResponse<AuthTokenDTO>> {
    return http.post('/auth/login', credentials)
  },

  async register(data: RegisterDTO): Promise<ApiResponse<UserDTO>> {
    return http.post('/auth/register', data)
  },

  async logout(): Promise<void> {
    await http.post('/auth/logout', {})
    if (typeof window !== 'undefined') {
      localStorage.removeItem('nexus_access_token')
      localStorage.removeItem('nexus_refresh_token')
    }
  },

  async refreshToken(token: string): Promise<ApiResponse<AuthTokenDTO>> {
    return http.post('/auth/refresh', { refreshToken: token })
  },

  async getProfile(): Promise<ApiResponse<UserDTO>> {
    return http.get('/auth/me')
  },

  async enable2FA(): Promise<ApiResponse<{ qrCode: string; secret: string }>> {
    return http.post('/auth/2fa/enable', {})
  },
}

// ─── Server Service ──────────────────────────────────────────

export const serverService = {
  async list(page = 1, perPage = 10): Promise<PaginatedResponse<ServerDTO>> {
    const res = await http.get<PaginatedResponse<ServerDTO>>(
      `/servers?page=${page}&perPage=${perPage}`
    )
    return res.data
  },

  async getById(id: string): Promise<ApiResponse<ServerDTO>> {
    return http.get(`/servers/${id}`)
  },

  async getMetrics(id: string): Promise<ApiResponse<ServerMetricsDTO>> {
    return http.get(`/servers/${id}/metrics`)
  },

  async start(id: string): Promise<ApiResponse<ServerDTO>> {
    return http.post(`/servers/${id}/start`, {})
  },

  async stop(id: string): Promise<ApiResponse<ServerDTO>> {
    return http.post(`/servers/${id}/stop`, {})
  },

  async reboot(id: string): Promise<ApiResponse<ServerDTO>> {
    return http.post(`/servers/${id}/reboot`, {})
  },

  async createSnapshot(id: string, name: string): Promise<ApiResponse<{ snapshotId: string }>> {
    return http.post(`/servers/${id}/snapshots`, { name })
  },

  async resize(id: string, planId: string): Promise<ApiResponse<ServerDTO>> {
    return http.post(`/servers/${id}/resize`, { planId })
  },
}

// ─── Pricing Service ─────────────────────────────────────────

export const pricingService = {
  async getPlans(category?: string): Promise<ApiResponse<PlanDTO[]>> {
    const query = category ? `?category=${category}` : ''
    return http.get(`/plans${query}`)
  },
}

// ─── Datacenter Service ──────────────────────────────────────

export const datacenterService = {
  async list(): Promise<ApiResponse<DatacenterDTO[]>> {
    return http.get('/datacenters')
  },

  async getStatus(): Promise<ApiResponse<Record<string, string>>> {
    return http.get('/datacenters/status')
  },
}

// ─── Billing Service ─────────────────────────────────────────

export const billingService = {
  async getInvoices(page = 1): Promise<PaginatedResponse<InvoiceDTO>> {
    const res = await http.get<PaginatedResponse<InvoiceDTO>>(`/billing/invoices?page=${page}`)
    return res.data
  },

  async getInvoiceById(id: string): Promise<ApiResponse<InvoiceDTO>> {
    return http.get(`/billing/invoices/${id}`)
  },

  async addPaymentMethod(data: unknown): Promise<ApiResponse<unknown>> {
    return http.post('/billing/payment-methods', data)
  },
}

// ─── Support Service ─────────────────────────────────────────

export const supportService = {
  async getTickets(): Promise<ApiResponse<TicketDTO[]>> {
    return http.get('/support/tickets')
  },

  async createTicket(data: {
    subject: string
    message: string
    priority: string
  }): Promise<ApiResponse<TicketDTO>> {
    return http.post('/support/tickets', data)
  },

  async replyTicket(ticketId: string, message: string): Promise<ApiResponse<TicketDTO>> {
    return http.post(`/support/tickets/${ticketId}/replies`, { message })
  },
}
